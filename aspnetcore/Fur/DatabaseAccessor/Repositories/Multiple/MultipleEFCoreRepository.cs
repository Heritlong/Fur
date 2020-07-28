﻿using Autofac;
using Fur.DatabaseAccessor.Contexts.Identifiers;
using Fur.DatabaseAccessor.Models.Entities;

namespace Fur.DatabaseAccessor.Repositories.Multiple
{
    /// <summary>
    /// 非泛型多上下文的仓储实现类
    /// </summary>
    public partial class MultipleEFCoreRepository : IMultipleRepository
    {
        /// <summary>
        /// Autofac生命周期对象
        /// </summary>
        private readonly ILifetimeScope _lifetimeScope;

        #region 构造函数 + public MultipleDbContextEFCoreRepository(ILifetimeScope lifetimeScope)

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="serviceProvider">Autofac生命周期对象</param>
        public MultipleEFCoreRepository(ILifetimeScope lifetimeScope)
        {
            _lifetimeScope = lifetimeScope;
        }

        #endregion

        #region 获取泛型多上下文仓储接口 +  public IRepositoryOfT<TEntity, TDbContextIdentifier> Set<TEntity, TDbContextIdentifier>(bool newScope = false)

        /// <summary>
        /// 获取泛型多上下文仓储接口
        /// </summary>
        /// <typeparam name="TEntity">实体类型</typeparam>
        /// <typeparam name="TDbContextIdentifier">数据上下文标识类。参见：<see cref="FurDbContextIdentifier"/></typeparam>
        /// <param name="newScope">如果为false，则从服务容器中读取一个对象，没有就创建。如果设置为true，则每次都会创建新的实例</param>
        /// <returns><see cref="IRepositoryOfT{TEntity, TDbContextIdentifier}"/></returns>
        public IRepositoryOfT<TEntity, TDbContextIdentifier> Set<TEntity, TDbContextIdentifier>(bool newScope = false)
            where TEntity : class, IDbEntityBase, new()
            where TDbContextIdentifier : IDbContextIdentifier
        {
            if (newScope)
            {
                return _lifetimeScope.BeginLifetimeScope().Resolve<IRepositoryOfT<TEntity, TDbContextIdentifier>>();
            }
            return _lifetimeScope.Resolve<IRepositoryOfT<TEntity, TDbContextIdentifier>>();
        }

        #endregion
    }
}