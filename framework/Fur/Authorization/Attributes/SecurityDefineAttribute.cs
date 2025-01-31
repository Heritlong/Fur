﻿using Fur.DependencyInjection;
using System;

namespace Fur.Authorization
{
    /// <summary>
    /// 安全定义特性
    /// </summary>
    [SkipScan, AttributeUsage(AttributeTargets.Method)]
    public class SecurityDefineAttribute : Attribute
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="name"></param>
        public SecurityDefineAttribute(string resourceId)
        {
            ResourceId = resourceId;
        }

        /// <summary>
        /// 资源Id，必须是唯一的
        /// </summary>
        public string ResourceId { get; set; }
    }
}