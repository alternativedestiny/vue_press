# MATPOWER User's Manual 翻译

> Verison 7.1

## 1. Power FLow 潮流

### 1.1. AC Power Flow 交流潮流

### 1.2. DC Power Flow 直流潮流

### 1.3. Distribution Power Flow 配网潮流

1. Distribution systems are different from transmission systems in a  number of respects, such as the x<sub>s</sub>/r<sub>s</sub> branch ratio, magnitudes of x<sub>s</sub> and r<sub>s</sub> and most importantly the typically radial structure. Due to these differences, a number of power flow solution methods have been developed to account for the specific nature of distribution systems and most widely used are the backward/forward sweep methods [15, 16]. Matpower includes an additional three AC power flow methods that are specific to radial networks.
2. 配点网系统在许多方面不同于输电网，比如 x<sub>s</sub>/r<sub>s</sub>支路比，x<sub>s</sub>和 r<sub>s</sub>的大小，更重要的是（配电网的）放射状结构。由于这些不同点，针对配网系统的特殊性提出了一组潮流计算求解函数和广泛使用的 backward/forward 算法(前推回代法)。Matpower 还包含额外的三种用于辐射状网络的交流潮流计算方法。

#### 1.3.1. Radial Power Flow 辐射电网潮流

1. 
