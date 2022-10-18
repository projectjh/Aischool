# import matplotlib.pyplot as plt
# import numpy as np
#
# x = np.arange(-4.5, 5, 0.5)
# y = 2*x**2
# print([x, y])
# plt.plot(x, y)
# plt.show()

import matplotlib.pyplot as plt
import numpy as np

t = np.arange(0., 5., 0.2)
plt.title('Line Plot')
plt.plot(t, t, 'r--', label='Red')
plt.plot(t, 0.5 * t**2, 'bs:', label='Blue')
plt.plot(t, 0.2 * t**3, 'g^-', label='Green')
plt.legend()
plt.show()

