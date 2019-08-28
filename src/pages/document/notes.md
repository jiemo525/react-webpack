> react新的调度策略：Fiber reconcile
- 第一阶段：Reconcile阶段。
- 第二阶段：Commit阶段。

> 思想

- 会将整个更新任务分成若干个小的更新任务
- 给任务设置优先级 来的任务优先级高的先执行
- 每执行完一个小任务之后，会释放主线程

> 新版变化

- 我们传给setState的不是最新状态，而是一个callback，这个callback返回最新状态。

