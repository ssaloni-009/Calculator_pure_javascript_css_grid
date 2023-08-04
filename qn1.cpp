#include<iostream>
using namespace std;
int main()
{
    int t; 
    cin>>t;
    while(t--){
          int x;
          cin>>x;
          if(x%10==0){
           
            cout<<100-x<<endl;
          }
          else if(x%10<5){
            cout<<100-(x/10)*10<<endl;
          }
          else{
            int k=1+(x/10);
            cout<<100-(k*10)<<endl;
          }
    }
    
    return 0;
}
