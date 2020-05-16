# Python 代码块

## 1. 通用型

### 1.1. 可变进度百分比

```python
import time
import sys

# 输出进度百分比 rate_of_process
# r:当前步数，p:总步数，s:文本
def rop(r, p, s='rate of process'):
    # \r 退格到行首
    str1 = s + ': ' + str(round((r / p) * 100, 2)) + '%'
    sys.stdout.write('\r%s' % str1)
    sys.stdout.flush()
    if r == p:
        sys.stdout.write('\n')
```

### 1.2. 程序计时

```python
from time import process_time, perf_counter
# 不会计算sleep()时间
print(process_time())
# 会计算sleep()时间
print(perf_counter())
```
