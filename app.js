function Slider(){
    const customerImage = document.querySelector("#customer-img");
    const customerName = document.querySelector("#customer-name");
    const customerText = document.querySelector("#customer-text");
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    const btn = document.querySelector(".btn");
    let index = 0;
    let array = [];
    
    function Customer(img,name,text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img,name,text){
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        array.push(customer);

    } 


    createCustomer(0,"ABC", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" )

    createCustomer(1,"XYZ", " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,");

    createCustomer(2,"POS", "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,");

    createCustomer(3,"QWE", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.");

    createCustomer(4, "DEF", "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text");

    prevBtn.addEventListener("click", function(){
        
        if (index === 0 ){
            index = array.length
        }
        index--
        customerImage.src = array[index].img;
        customerName.textContent = array[index].name;
        customerText.textContent = array[index].text;
    
    })
    nextBtn.addEventListener("click", function(){
        index++
        if (index === array.length ){
            index = 0
        }
        customerImage.src = array[index].img;
        customerName.textContent = array[index].name;
        customerText.textContent = array[index].text;
    })
}
Slider();

