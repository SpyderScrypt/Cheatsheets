# sudo python3.6 -m pip install camelcase
# pip version pip 8.1.1
# to see location of installed package eg - pip3 show beautifulsoup4

import camelcase

c = camelcase.CamelCase()

txt = "hello world"

print(c.hump(txt))
