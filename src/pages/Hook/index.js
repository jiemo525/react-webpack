import React, { useState, useEffect  } from 'react';

function Hook() {
  const [count, setCount] = useState(0);//数组解耦赋值 多对需要多次使用useState

  useEffect( () => {//每次加载完成 执行
    console.log('1111');
  })
  return (
    <div>
      <p>nnnnnn{count}nnnnn</p>
      <button onClick={() => setCount(count + 1)}>加</button>
    </div>
  )
}
export default Hook;