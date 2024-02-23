const routes = [
  {
    name: 'M1',
    comp: 'C1',
  },
  {
    name: 'M2',
    comp: 'C2',
  },
  {
    name: 'M3',
    subComp: [
      {
        name: 'M3A',
        comp: 'C3A',
      },
      {
        name: 'M3B',
        comp: 'C3B',
      },
    ],
  },
  {
    name: 'M4',
    subComp: [
      {
        name: 'M4A',
        comp: 'C4A',
      },
      {
        name: 'M4B',
        comp: 'C4B',
      },
    ],
  },
  {
    name: 'M5',
    subComp: [
      {
        name: 'M5A',
        comp: 'C5A',
      },
      {
        name: 'M5B',
        subComp: [
          {
            name: 'M5BA',
            comp: 'C5BA',
          },
          {
            name: 'M5BB',
            comp: 'C5BB',
          },
          {
            name: 'M5BC',
            comp: 'C5BC',
          },
        ],
      },
      {
        name: 'M5C',
        comp: 'C5C',
      },
    ],
  },
];

const subscription = [
  {
    name: 'M1',
    isSub: true,
  },
  {
    name: 'M2',
    isSub: false,
  },
  {
    name: 'M3',
    isSub: false,
    subMod: [
      {
        name: 'M3A',
        isSub: true,
      },
      {
        name: 'M3B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M4',
    isSub: true,
    subMod: [
      {
        name: 'M4A',
        isSub: false,
      },
      {
        name: 'M4B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M5',
    isSub: true,
    subMod: [
      {
        name: 'M5A',
        isSub: false,
      },
      {
        name: 'M5B',
        isSub: true,

        subMod: [
          {
            name: 'M5BA',
            isSub: false,
          },
          {
            name: 'M5BB',
            isSub: true,
          },
          {
            name: 'M5BC',
            isSub: false,
          },
        ],
      },
      {
        name: 'M5C',
        isSub: true,
      },
    ],
  },
];

console.log(JSON.stringify(checkSubscription(subscription,routes)));
function checkSubscription(subscription,routes){

    if(subscription.length!= routes.length)
    return;

    let resultArray=[];
    for(let i=0;i<subscription.length;i++){

        if(subscription[i].name==routes[i].name){
            if(subscription[i].isSub==true){

              let newObj={ name: routes[i].name};
                if(subscription[i].hasOwnProperty('subMod'))
                  {

                    let innerObjectSubscription=subscription[i].subMod;
                    let innerObjectRoutes=routes[i].subComp;
                    let innerSubArray=checkSubscription(innerObjectSubscription,innerObjectRoutes);
                   
                    newObj.subComp=innerSubArray;
                    resultArray.push(newObj);
                    // continue;
                  }else{
                  resultArray.push({ redirectTo: routes[i].name});
                  }


            }
            else{
            resultArray.push({ name: routes[i].name, comp: "UN"});
            }
        }
        else{
          resultArray.push({ name: routes[i].name, comp: "UN"});
        }
    }
return resultArray;
}