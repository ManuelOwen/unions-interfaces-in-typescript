const typeAlliances = () =>{

 //creating variable assigning value 
let age : number = 20;


// usinge type alliances
type age2 = number;
let kibetAge: age2 =20;
 type stringOrNumber = string | number;
 let ourValueOrString: stringOrNumber = "name"; 

 type person = {
  name: string;
  age: number;
  id: number;
  marital :boolean;
  address?:
   {
     city: string;
    country: string;
   }
   zipcode?: number;

 }
 type resident = person&{
   residentId: number;


 }
 let Amos:resident ={
  name: "Amos",
  age: 20,
  id: 123,
  marital: false,
  address:{
    city: "Nairobi",
    country: "Kenya"
  },
  zipcode: 451,
  residentId: 123,
 }
console.log(Amos.age, Amos.marital, Amos.id);
}
export default typeAlliances;