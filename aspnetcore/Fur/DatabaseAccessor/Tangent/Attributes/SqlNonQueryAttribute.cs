﻿using Fur.Attributes;
using System;

namespace Fur.DatabaseAccessor.Attributes
{
    /// <summary>
    /// 切面增删改特性
    /// </summary>
    [AttributeUsage(AttributeTargets.Method), NonInflated]
    public class SqlNonQueryAttribute : TangentSqlAttribute
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="sql">sql语句</param>
        public SqlNonQueryAttribute(string sql) : base(sql)
        {
        }
    }
}