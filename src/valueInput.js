export default function writesValueInput(event) {
    let data = '';

   const formData = new FormData(event.currentTarget);
       formData.forEach(value => {
       data += value;
   }); 

   return data;
}