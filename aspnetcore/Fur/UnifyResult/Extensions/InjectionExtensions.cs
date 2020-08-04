﻿using Autofac;
using Fur.Attributes;
using Fur.UnifyResult.Providers;

namespace Fur.UnifyResult.Extensions
{
    /// <summary>
    /// 数据库访问注册拓展类
    /// </summary>
    [NonInflated]
    public static class InjectionExtensions
    {
        public static ContainerBuilder RegisterUnifyProvider<TUnifyProvider>(this ContainerBuilder builder)
        {
            builder.RegisterType<TUnifyProvider>()
                .As<IUnifyResultProvider>()
                .InstancePerLifetimeScope();
            return builder;
        }
    }
}