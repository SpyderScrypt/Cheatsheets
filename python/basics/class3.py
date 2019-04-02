class Account():
    def __init__(self,owner,balance = 0):
        self.owner = owner
        self.balance = balance

    def __repr__(self):
        return f"Account Owner: {self.owner}, Balance: {self.balance}"

    def deposit(self,dep_amt):
        self.balance = self.balance + dep_amt
        print("Deposit was accepted")

    def withdrawal(self,wd_amt):
        if(self.balance >= wd_amt):
            self.balance = self.balance - wd_amt
            print("Withdrawal Successful")
        else:
            print("Funds not available!")


acc1 = Account("Akash",100)
print(acc1)

print(acc1.owner)

print(acc1.balance)

acc1.deposit(50)

acc1.withdrawal(10)

print(acc1)

acc1.withdrawal(200)