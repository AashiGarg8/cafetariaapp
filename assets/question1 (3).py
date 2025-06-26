import time 
import pyautogui
time.sleep(5)

pyautogui.typewrite("""
#include <iostream>
#include <vector>
#include <string>
using namespace std;

// Base class
class BankAccount {
protected:
int accountNumber;
string accountHolderName;
float balance;

public:
BankAccount(int accNum, const string& holderName, float bal)
: accountNumber(accNum), accountHolderName(holderName), balance(bal) {}

virtual void displayDetails() const {
// base method, can be left empty or generic
}

virtual ~BankAccount() {} // Virtual destructor
};

// Derived class: SavingsAccount
class SavingsAccount : public BankAccount {
float interestRate;

public:
SavingsAccount(int accNum, const string& holderName, float bal, float rate)
: BankAccount(accNum, holderName, bal), interestRate(rate) {}

void displayDetails() const override {
cout << "Savings .Account . - .Account -Number: ." << accountNumber
<< ", Holder: " << accountHolderName
<< ", Balance: " << balance
<< ", Interest . Rate: " << interestRate << endl;
}
};

// Derived class: CurrentAccount
class CurrentAccount : public BankAccount {
float overdraftLimit;

public:
CurrentAccount(int accNum, const string& holderName, float bal, float limit)
: BankAccount(accNum, holderName, bal), overdraftLimit(limit) {}

void displayDetails() const override {
cout << "Current . Account . - . Account - Number: " << accountNumber
<< ", -Holder: ." << accountHolderName
<< ", .Balance: " << balance
<< ", -Overdraft . Limit: " << overdraftLimit << endl;
}
};

int main() {
int N;
cin >> N;

vector<BankAccount*> accounts;

for (int i = 0; i < N; ++i) {
char type;
int accNum;
string holderName;
float balance;
float extraInfo; // interest rate or overdraft limit

cin >> type >> accNum >> holderName >> balance >> extraInfo;

if (type == 'S' || type == 's') {
accounts.push_back(new SavingsAccount(accNum, holderName, balance, extraInfo));
} else if (type == 'C' || type == 'c') {
accounts.push_back(new CurrentAccount(accNum, holderName, balance, extraInfo));
}
}

for (BankAccount* account : accounts) {
account->displayDetails();
}

// Clean up
for (BankAccount* account : accounts) {
delete account;
}

return 0;
}
""",interval=0)






