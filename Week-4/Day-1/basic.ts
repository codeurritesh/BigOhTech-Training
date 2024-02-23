// //      TYPESCRIPT
// //---------------------

// // const data={
// //     name:"Ritesh",
// //     age:"22"
// // }
// // console.log(data.bio); shows Error before Running

// // Number: 

// // const rollNumber=112233; OR const rollNumber:number=12333;
// // console.log(typeof(rollNumber));    // Detect Number
// // rollNumber="hello";              Shows Error becaue rollnumber is of Number type can not be modified

// // String:

// const name:string="ritesh";
// // name=122;                        //Shows Error



// type UserID = 1| "abv" |2 | 'uuid1' | 'uus2'
// type NotificationFlagType = "error" | 'success' | 'info'


// const showNotification = (type:NotificationFlagType,text:string)=>{

// }

// showNotification('success','Show confirmartion')

// const userList = {
//     id:'2213-asdd-12',
//     name:"Shivendra"
// }

// var str: UserID = 1
// str = 1 

// const val = 1

// const userId:string = userList.id

// str = 1

// console.log(typeof str)




// type UserType = {
//     name?:string,
//     readonly age?:number,
//     address?:{
//         city:string,
//         state:string,
//         pin?:string,
//     },
//     family?:{fName:string}[]
// }
// type ReqUSerType = Required<UserType>

// type Address = Required< Required<UserType>['address']>

// // type FamilyType = UserType['family'][number] //  UserType['family'][0] 

// type UserProperties  = keyof UserType

// const userKey:UserProperties = 'age'

// type AddressWihtoutPin  = Omit<Address,'pin'>
// type AddressWihtCityState  = Pick<Address,'city' | 'state'>

// var add :Address = {
//      city:'Some city',
//     state:'Some state',
//     pin:'asd'
// }

// type Greetings = 'Hi' |'Hello' | 'Welcome' | Address

// type GreetingWithoutHello = Exclude<Greetings,"Hi" | "Hello" >
// // Extract
 


// // Partial, Required , Omit , Pick

// type UserObj = Readonly<UserType>

// const userObj:UserObj = {
//     name:"Shviendra",
//     age:25,
//     // city:'Some city',
//     // state:'Some state'
// }

// // const {name} = userObj



// type ArraysOfStr = (string|number)[] 
// type UserArray = Array<UserType> // UserType[] 
// type Tuples = [number,string,boolean,'hi'|'hello']

// const arr :ArraysOfStr = ['sasd',1]
// const tup:Tuples = [1,'str',true,'hello']

// const [num,...restItem] = tup

// const userArr:UserArray = [{
//     name:"Shviendra",
//     age:25,
// }]

// userArr.map(item=>{
// })






// const person = {
//     name:"Shviendra",
//     age:25,
// }

// type Person = typeof person

// type PersonProperties  = keyof typeof person // keyof Person

// function extractValue(person:Person,key:PersonProperties){
//     return person[key]
// }

// extractValue(person,'name')


// const colorConfigCn = {
//   warning:"Yellow",
//   error:'Red',
//   success:"Green"
// }

// enum ColorConfig{
//     warning = 'Orange',
//       error='Red',
//   success="Green"
// }

// enum WeekEnum{
//     Monday = 3,
//     Tuesday,
//     Wed
// }
// console.log(WeekEnum,'WeekEnum')

// const apiVale = 'Orange'

// const color :ColorConfig = ColorConfig.error
// const colorFormConst : keyof typeof colorConfigCn = 'error'

// function restFn(...arg:number[]){}

// interface User1{
//     name:string
// }

// interface User1{
//     age:string
// }

// // Generics



// type UserTypeGen<KName,TAge extends string = string> = {
//     name:KName,
//     age:TAge
// }

// const userStrOnly:UserTypeGen<'hi'|'hello'> = {
//  age:'hello',
//  name:"hi"
// }

// function fun<TFlag extends boolean>(flag:TFlag,val: TFlag extends true ?  "active":'inactive'){

// }

// fun<true>(true,'active')

// const funC = <TFlag extends boolean>()=>{

// }

// type ValType<TFlag extends boolean> =TFlag extends true ? {
//     isActive:string
//     isInactive?:never
// } : {
//       isActive?:never
//     isInactive:string
// }

// function funTwo<TFlag extends boolean>(flag:TFlag,val:ValType<TFlag>){

// }


// funTwo(false,{
//     // isActive:"true",
//     isInactive:'true'
// })


// type ExclusiveProperty<T> = {
//   [K in keyof T]: {
//     [P in K]: T[P]
//   } & {
//     [Q in Exclude<keyof T, K>]?: never
//   }
// }[keyof T]

// type Flag = {
//     isError:boolean,
//     isSucc:boolean,
//     isDisabled:boolean,
// }

// const flag:ExclusiveProperty<Flag> = {
//     isError:true,
//     isSucc:true
// }

// type SuggestionString<TKey extends string> =
//   | TKey
//   | (string & NonNullable<unknown>)

// type Str = SuggestionString< 'hello' | 'hi' >

// const string:Str = ''


// interface PersonNew{
//     name:string
//     age:string

//     getName : ()=>PersonNew['name']
// }

// class UserClass implements PersonNew{
//     name:string
//     age:string

// constructor(input:UserType){
//     this.name = input.name  ?? ''
//     this.age = "25"
// }

// getName(){
//     return this.name
// }
// }

// const asd:Promise<{name?:string |null,}> = fetch("")

// const data = await asd()
// class Family 

// const userC = new UserClass(userObj)

// var userB :UserClass

// userC.getName()

// export {}
