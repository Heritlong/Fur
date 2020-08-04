﻿using Fur.Attributes;

namespace Fur.SwaggerDoc.Options
{
    /// <summary>
    /// Swagger 分组协议配置选项
    /// </summary>
    [NonInflated]
    public sealed class SwaggerDocLicenseOptions
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Uri地址
        /// </summary>
        public string Uri { get; set; }
    }
}