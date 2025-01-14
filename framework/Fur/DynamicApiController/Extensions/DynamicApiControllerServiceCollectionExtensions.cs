﻿using Fur.DependencyInjection;
using Fur.DynamicApiController;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using System;
using System.Linq;

namespace Microsoft.Extensions.DependencyInjection
{
    /// <summary>
    ///动态接口控制器拓展类
    /// </summary>
    [SkipScan]
    public static class DynamicApiControllerServiceCollectionExtensions
    {
        /// <summary>
        /// 添加动态接口控制器服务
        /// </summary>
        /// <param name="mvcBuilder">Mvc构建器</param>
        /// <returns>Mvc构建器</returns>
        public static IMvcBuilder AddDynamicApiControllers(this IMvcBuilder mvcBuilder)
        {
            var services = mvcBuilder.Services;

            var partManager = services.FirstOrDefault(s => s.ServiceType == typeof(ApplicationPartManager)).ImplementationInstance as ApplicationPartManager
                ?? throw new InvalidOperationException($"`{nameof(AddDynamicApiControllers)}` must be invoked after `{nameof(MvcServiceCollectionExtensions.AddControllers)}`");

            // 添加控制器特性提供器
            partManager.FeatureProviders.Add(new DynamicApiControllerFeatureProvider());

            // 添加配置
            services.AddConfigurableOptions<DynamicApiControllerSettingsOptions>();

            // 配置 Mvc 选项
            mvcBuilder.AddMvcOptions(options =>
            {
                // 添加应用模型转换器
                options.Conventions.Add(new DynamicApiControllerApplicationModelConvention());

                // 处理 Web API 不支持的返回格式，统一返回 406 状态码
                //options.ReturnHttpNotAcceptable = true;
            });

            // 添加丰富类型支持
            mvcBuilder.AddNewtonsoftJson();

            // 添加 Xml 支持
            mvcBuilder.AddXmlDataContractSerializerFormatters();

            return mvcBuilder;
        }
    }
}