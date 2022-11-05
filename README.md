## Prepare Stage
- npm install -g @vue/cli-init
- vue create project-name
- Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
- [API iwen](http://iwenwiki.com/wapicovid19/)

## Dependencies
- npm install --save axios

## Some experience
> avoid using axios multiple times in sibling component, make request at parent and passing value to children props could be used.
- 1. declare data in parent as object, receiving value from axios.   ``` <CaseNum :cases="cases"/>```
- 2. children props get data ```props:{ cases:{ type:Object,default:()=>{ return {} } } }  {{cases.currentConfirmedCount}}```