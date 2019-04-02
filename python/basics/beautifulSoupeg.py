from bs4 import BeautifulSoup
from urllib.request import urlopen


html = urlopen("http://www.google.com/")
print(html)


quote_page = "https://pip.pypa.io/en/stable/reference/pip_install/"
soup = BeautifulSoup(quote_page, "html.parser")

page = urlopen(quote_page)

soup = BeautifulSoup(page, "html.parser")

print(soup)