
    function openpromomsg(){
          //  alert("open na")
        document.getElementById('promo-close').style.display="block"
    }


    function availability(){
        document.getElementById('nav-1').style.display="none"
        const  btnx = document.getElementById('Div-Edit');
         document.getElementById('pop-up').style.display = 'none'; 
        if(btnx.style.display==="block")
            document.getElementById('Div-Edit').style.display="none"
        else
             document.getElementById('Div-Edit').style.display="block"
    }
    

    function clickhead() {
        // document.getElementById("nav-1");
        const  btnx = document.getElementById('nav-1');
        if(btnx.style.display==="block")
            document.getElementById('nav-1').style.display="none"
        else
             document.getElementById('nav-1').style.display="block"
    }

    function clicklist1(){
        const  btnx1 = document.getElementById('list-1-2');
        if(btnx1.style.display==="none")
            document.getElementById('list-1-2').style.display="block"
        else
             document.getElementById('list-1-2').style.display="none"   
    }
    function clicklist2(){
        
       // document.getElementById("list-1-3").style.display ==="none" ? "block" : "none";
        const btn2= document.getElementById("list-1-3");
           if(btn2.style.display==="none")
            document.getElementById('list-1-3').style.display="block"
        else
             document.getElementById('list-1-3').style.display="none"   
    
    }

  

    // **************** Edit items ***************************

let Items  = []; Mbrand = []; Mcategory = []; PermissionData = [], PromoMsgTxt='';
getJSONitems();
getJSONcategory(); 
getJSONbrand();
getJSONpermission();
getPromotxt();





function getPromotxt(){
    //ORIGINAL ITEM
 const dropboxUrl ="https://dl.dropboxusercontent.com/scl/fi/7e07h5jar419g6f7mvmm1/Promotxt.json?rlkey=l2rl9vm00zk5i8mfu3d9ejlbr&st=aqk14007&dl=0"
    fetch(dropboxUrl)
      .then(response => response.json())
      .then(jsonData => {
        let jsonData1=JSON.parse(JSON.stringify(jsonData));
        PromoMsgTxt = jsonData1.promo;
        document.querySelector(".promo-text").innerText= PromoMsgTxt;
        document.getElementById('fpromomsg').innerText= PromoMsgTxt;
        // console.log("json string ",promomsg,jsonData1)    // console.log("JSON Data:", jsonData);
      })
      .catch(error => console.error("Error fetching JSON:", error));
}

function getJSONpermission(){
   // const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/chri911mbm8dg8jqpij7e/permbak.json?rlkey=rfuaextda796booaj7yov2886&st=bxv6zvqi&dl=0';
    const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/ymupy00vfmq37ved8leav/permision.json?rlkey=dhqb82d8z43t0hnmv0ezr8smp&st=2pkjpqw6&dl=0';
   
   fetch(dropboxUrl)
    .then(response => response.json())
    .then(jsonData => {
        // Mbrand.sort();
        // jsonData.sort((a,b) => a.userfname.localeCompare(b.partno) && a.userlname.localeCompare(b.userlname));
        let jsonData1=JSON.parse(JSON.stringify(jsonData));
        PermissionData = [...jsonData1];
    })
    .catch(error => console.error("Error fetching JSON:", error));
}


function getJSONbrand(){
const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/v7yf90wau5mce5iamcpok/brand.json?rlkey=04guyov5k6sqmq88caczt2qla&st=3p6lpyfg&raw=1'
const dropdown = document.querySelector('.Mybrand');
fetch(dropboxUrl)
  .then(response => response.json())
  .then(Mbrand => {
        Mbrand.sort();
        Mbrand.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        dropdown.appendChild(option);
      })
  })
  .catch(error => console.error("Error fetching JSON:", error));
}



function getJSONcategory(){
const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/gfmaqxh87yt9om7qthq6m/category.json?rlkey=di2ky1i8td20kz9gc8x6s2yvy&st=wlp957qv&raw=1'
//const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/v7yf90wau5mce5iamcpok/brand.json?rlkey=04guyov5k6sqmq88caczt2qla&st=3p6lpyfg&raw=1'
const dropdown = document.querySelector('.Mycategory');
fetch(dropboxUrl)
  .then(response => response.json())
  .then(Mcategory => {
        Mcategory.sort();
        Mcategory.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        dropdown.appendChild(option);
      })
  })
  .catch(error => console.error("Error fetching JSON:", error));
}


function getJSONitems(){

// const dropboxUrl2 = 'https://dl.dropboxusercontent.com/scl/fi/ueosrbyx67b53c2rjd6le/item4.json?rlkey=ftm8b07i4c6k0zxnamd9cz732&st=6x81c3g7&dl=0'
const dropboxUrl2 = 'https://dl.dropboxusercontent.com/scl/fi/998tf3rypwb4kidt396d8/items.json?rlkey=h4gebw2odff7tbktvs9ki64sl&st=a0xk3clk&dl=0'
fetch(dropboxUrl2)
  .then(response => response.json())
  .then(jsonData => {
    let jsonData1=JSON.parse(JSON.stringify(jsonData));
  
     Items = [...jsonData1];
   // Items.sort((a,b) => a.partno.localeCompare(b.partno));
  })
  .catch(error => console.error("Error fetching JSON:", error));
}


function ViewItems2(data1,LookItem) {
  const tableBody = document.querySelector("#table-1 tbody");
  const output = document.querySelector("table-div");
//   console.log("items Data:", data1);
  data1.sort((a,b) => a.partno.localeCompare(b.partno));
  tableBody.innerHTML = "";
        data1.forEach((data1, index) => {             
               if(data1.partno.toUpperCase().includes(LookItem) || data1.brand.toUpperCase().includes(LookItem) || data1.desrip.toUpperCase().includes(LookItem)) {
                        const row = document.createElement("tr");
                        row.dataset.index = index; // Store array index on the row
                        const formatted = data1.price.toLocaleString('en-US', {  // format numerica no.
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        });
                        row.innerHTML = `
                        <tr>
                        <td>${index}</td>
                        <td>${data1.partno}</td>
                        <td>${data1.brand}</td>
                        <td>${data1.desrip}</td>
                        <td>${formatted}</td>
                        `;
                        
                        // 3. Add onclick listener to each row
                        row.addEventListener("click", function() {
                                        const selectedIndex = this.dataset.index;
                                        const selectedItem = data1[selectedIndex]; // Pick the item
                                        // box.textContent = data1.partno ;
                                         document.getElementById('fbrand').value =  data1.brand;
                                         document.getElementById('fPartno').value =  data1.partno;
                                         document.getElementById('fdesrip').value =  data1.desrip
                                         document.getElementById("fprice").value = Number(data1.price);
                                         document.getElementById("fcategory").value = data1.category;
                                         document.getElementById("fpromo").value = data1.promo;
                                         document.getElementById("fdeletion").value = data1.deletion;
                                         document.getElementById("favailable").value = data1.active ;
                                         document.getElementById('editbox-close').style.display = 'block';                               
                                        });
                        tableBody.appendChild(row);     
                }
        } )               
}         

function backtomenu1(){
   document.getElementById('Div-Edit').style.display="none";  
   document.getElementById('Member-Approval').style.display="none";
   document.getElementById('pop-up').style.display = 'block'; 
}

function con_price(nPrice){
           return nPrice = nPrice.toLocaleString('en-US', {  // format numerica no.
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3
              });
    }  
 function checkEnter(event) {
    if (event.key === 'Enter') {
        ViewItems2(Items,event.target.value.toUpperCase());
    }
}

function closeCustomAlert() {
          document.getElementById('editbox-close').style.display = 'none';             
}
function closepromomsg() {
          document.getElementById('promo-close').style.display = 'none';             
}
function closePermissionAlert() {
          document.getElementById('permissionbox-close').style.display = 'none';             
}


const tokenName = 'https://dl.dropboxusercontent.com/scl/fi/a1x40x537t6s7xwq9rho4/TokenAccess.json?rlkey=6doc8qb7m7bxhqugqgp7z3soa&st=wppelt13&raw=1'
    
      //      const ACCESS_TOKEN ='sl.u.AG1VtIoIEKJ_thHE2g_ADzkeFXZycrqMGeaSrgpt0GzMmaZRI2A72yPEC6z-1FLz31XayuPP-6XuaQo9Qq9d-mysnj6f0D8_3oo0zGSmn7Idbn5pHJEKpMbBwiUxwQDkheHunOf7BR3B3tgGLeLdN-9xo-Wb4H-_SvwqgCw1_0A_iETdc00RzmRo50kzTzygueNeWWoGx0MygjZ8mKUBvKI3iUV-E47pZcfsAsbQPaaJtcU_i4Lg7fZ59a7v5xm0lFzt7r3hAjIrr7TUiSBnS1f_EKPt860PUTdgRHyS67G0_nk99N8f-BQ72dfgk3Ilef6qcaw75-iNIawWd2SvWtRnXCVhfheaBPJeuyDtKWaJS8_DsCVx64pTfamKl9u1wHu2sx8Hu-IR-r1rYh48Jz3xZQJnRuQ3bTWg2qgXThfMN-wTLF7nh8ezt7pjgBgbKCDdXouO-lzGThfsH8dGcU4dW252LjA1G_bFlwS1Z4HOdQuMgGA4497UV0hueSiZB8Amym3585ipLBJxqFt6yxV1ujvS985nQWdEK8B1uRBtztmJOnC_Xw99-VA0ZTzC0vJX6CWUM6PTeUQbgxm8aVlqF7CC3ZR4XAHdyi-CE2lMN-QNp8x4Yg7V3yyQHVWRZ3A-OmHi46qD4jxBUBdpr4RuzhDHa_kJyDGZzPOL7JYZVxVri4DmYVDR_-EUfH5tTvMJoD5tL5k2zowqui2KmTp_OzmHFkkKXBputBN_czwujPXI6RijAU_qlXLFhMpB6Ylp-jqhN8BH_YHhjZTvZ1SMaEzLnAEB7FRcpZ8eul-Dvok7g3O296EKCIcf1mJn-lm4dXViEW2caD_YBOmKzcTJw7b8t-fnZikU80TynonT88OR6lX6QL-k0qAsI2nmKgNEJCrtN6YBm2wsZgEIxH1Qr6EoVUNQhj-5wgWsuBbGsy1s-ioHQcv4e7XO2eC6C5LnRkCTJr-ChxVPiBiW4fz2mAY5YnfnDuxVumC8GnOO_aXN3mgDKQ52-yhxoQrA3eGrr8YVwOUArIKcpY2EFlFfcktb0Lvo1ggGGJZxhBgbLGnnhHjAUdPho_mO_Z5Mo02MsSovogJTFC4gYTAbwVUDQvzdz9x75-SyFBCotaVg3XHUPZpxeeHt38Z35WHhMoiUFwhR_cqDgvqc1n-fgVdqpQKzVoDYJNQGRpM2eGtmDFwKd-Sv6DmIqY6hPXhu_6UOjWknDpDfblgjZMYS7j1XBVVa9PT3g1moKQWkGdytvKJ6TuwOqYpm_NgqpWf6yIPdR5ZEEdq0XiVXq3xDWwJWy3hYJA9S5_6d3L5Fu-soN5kJtdJVLfrLSUEHetgBxOGzvQwrSACaix3Y5H9iBjC7iGf8MI6x8YBukQDeUYSS__0d1iMgERSfZfe3Y-9ydCW-YkdQPciQUWrHCuv2vnPzuNLz0qDzNvxR0JmZ8_qArWP3FIz3K7QwOgznBaQ8e-Y'
    
let  ACCESS_TOKEN = ''; 

looktokenName();

function looktokenName() {
    fetch(tokenName)
        .then(response => response.json())
        .then(jsonToken => {
            let Dtoken = JSON.parse(JSON.stringify(jsonToken));
            ACCESS_TOKEN = Dtoken[0].Token;
        }).catch(error => console.error("Error fetching TOKEN:", error));
}

// ************** save items to dropbox **********************

const PromoForm = document.getElementById("promo-formdata")
   // getPromotxt();
    //const promoURL ="https://dl.dropboxusercontent.com/scl/fi/7e07h5jar419g6f7mvmm1/Promotxt.json?rlkey=l2rl9vm00zk5i8mfu3d9ejlbr&st=aqk14007&dl=0"
     const promoURL = 'https://content.dropboxapi.com/2/files/upload'; 
     PromoForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let mypromoObj = new FormData(PromoForm);
        let promodata = Object.fromEntries(mypromoObj);
        let xpromo =promodata.promo.replace(/[\r\n]+/g, ", ");    
       // promodata[0].promo = xpromo;
       console.log(JSON.stringify(xpromo));

        // const tempo = PromoMsgTxt.map(pro => {
        //     pro[0].promo = xpromo;
        // })
    //    console.log(JSON.stringify(temp));
       document.getElementById('promo-close').style.display = 'none'; 

         const dropboxArgs = {
                path: '/Promotxt.json',
                mode: 'overwrite',
                autorename: false,
                mute: false
            };
             try {
                const response = await fetch(promoURL, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${ACCESS_TOKEN}`,
                            'Dropbox-API-Arg': JSON.stringify(dropboxArgs),
                             'Content-Type': 'application/octet-stream' 
                            // 'Content-Type': 'application/json' // Required by Dropbox Content 
                        }, 
                        body : JSON.stringify(promodata,null,2) 
                })
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Dropbox API error: ${errorText}`);
                }
                const result = await response.json();
                // console.log('File uploaded successfully via fetch!', result);
                alert("Message Save.......")
                 document.querySelector(".promo-text").innerText= PromoMsgTxt;

            } catch (error) {
                console.log('Error uploading file via fetch:', error);
                alert("Token Expired, Saving Data failed...");
            }      
  })


// ************** save items to dropbox **********************
const nexform = document.getElementById("myFormData")
  const url = 'https://content.dropboxapi.com/2/files/upload'; 
//   const mypartno='';
  nexform.addEventListener('submit', async (event) => {
        event.preventDefault();
        document.getElementById('editbox-close').style.display = 'none'; 
        let formObj = new FormData(nexform);
        let data = Object.fromEntries(formObj);
        const formatted = data.price.toLocaleString('en-US', {  // format numerica no.
             minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        const replaceDate = Items.map(item => {
            if (item.partno === data.partno){  
                    // mypartno = data.partno;
                    item.brand = data.brand;
                    item.price = Number(data.price);
                    item.desrip = data.desrip;
                    item.active = JSON.parse(data.active);
                    item.category = data.category;
                    item.deletion = JSON.parse(data.deletion);
                    item.promo = data.promo;
                    //  console.log("Item Updated:", item.active, data.active, data.price);
                    //  console.log(item)
              }  
            return item;
            });
            const dropboxArgs = {
                path: '/items.json',
                mode: 'overwrite',
                autorename: false,
                mute: false
            };
            try {
                const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${ACCESS_TOKEN}`,
                            'Dropbox-API-Arg': JSON.stringify(dropboxArgs),
                             'Content-Type': 'application/octet-stream' 
                            // 'Content-Type': 'application/json' // Required by Dropbox Content 
                        }, 
                        body : JSON.stringify(replaceDate,null,2) 
                })
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Dropbox API error: ${errorText}`);
                }
                const result = await response.json();
                // console.log('File uploaded successfully via fetch!', result);
                //
                alert("Item Updated....");
                 ViewItems2(Items,data.partno);
            } catch (error) {
                console.log('Error uploading file via fetch:', error);
                 alert("Token Expired, Saving Data failed...");
                
                console.log(Items)
              //  ViewItems2(Items,data.partno)
            }      
       //document.getElementById('editbox-close').style.display = 'none';      
    } )



// ************** save approval to dropbox **********************

const perdataform = document.getElementById("PermissionFormData");
perdataform.addEventListener('submit', async (event) => {
         event.preventDefault();
     //    alert("Permission Saving is not yet implemented. Please check back later.");
        document.getElementById('permissionbox-close').style.display = 'none'; 
        let formObj = new FormData(perdataform);
        let data = Object.fromEntries(formObj);
       // let fjasondata = JSON.stringify(data);
        const replaceDate = PermissionData.map(item => {
            // console.log("Permission Data:", item.userEmail, data.userEmail);
            if (item.userEmail === data.userEmail){   
                    item.permission = JSON.parse(data.permission);
                    item.pricefor = Number(data.pricefor);
                    item.count = Number(data.count);  
                   // console.log("Permission Updated:", item.userEmail, item.pricefor, item.count);  
              }    
            return item;
            } );  
             const dropboxArgs = {
                path: '/exports/permision.json',
                mode: 'overwrite',
                autorename: false,
                mute: false
            };
           try {
                const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${ACCESS_TOKEN}`,
                            'Dropbox-API-Arg': JSON.stringify(dropboxArgs),
                             'Content-Type': 'application/octet-stream' 
                            // 'Content-Type': 'application/json' // Required by Dropbox Content 
                        }, 
                        body : JSON.stringify(replaceDate,null,2) 
                })
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Dropbox API error: ${errorText}`);
                }
                const result = await response.json();
                // console.log('File uploaded successfully via fetch!', result);
                // ViewPermission(PermissionData,data.userfname.toUpperCase());
                alert("Member Access Updated....");
                ViewPermission(PermissionData,data.userfname.toUpperCase());
            } catch (error) {
                console.log('Error uploading file via fetch:', error);
                 alert("Token Expired, Saving Data failed..."); 
            }                  

        // console.log("Permission Data:", replaceDate);
        // PermissionData = [...replaceDate];
        
                
  })

// *************** Member View for  Approval ***********************

function ViewPermission(data1,LookItem) {
  const tableBody = document.querySelector("#table-p tbody");
  const output = document.querySelector("table-permision");
  data1.sort((a,b) => a.userlname.localeCompare(b.userlname) && a.userfname.localeCompare(b.userfname));
//   console.log("Permission Data:", data1);
  tableBody.innerHTML = "";
        data1.forEach((data1, index) => {             
               if(data1.userfname.toUpperCase().includes(LookItem) || data1.userlname.toUpperCase().includes(LookItem)) {
                        const row = document.createElement("tr");
                        row.dataset.index = index; // Store array index on the row
                        netprice = con_price(data1.pricefor);
                        row.innerHTML = `
                        <tr>
                        <td>${index}</td>
                        <td>${data1.userfname}</td>
                        <td>${data1.userlname}</td>
                        <td>${data1.userEmail}</td>
                        <td>${data1.permission}</td>
                        <td>${netprice}</td>
                        <td>${data1.count}</td>
                        `;
                        row.addEventListener("click", function() {
                                        const selectedIndex = this.dataset.index;
                                        const selectedItem = data1[selectedIndex]; // Pick the item
                                        // box.textContent = data1.partno ;
                                         document.getElementById('Puserfname').value =  data1.userfname;
                                         document.getElementById('Puserlname').value =  data1.userlname;
                                         document.getElementById('Puseremail').value =  data1.userEmail;
                                         document.getElementById("Ppermission").value = data1.permission ;
                                         document.getElementById("Pprice").value = netprice ;
                                         document.getElementById("Pcount").value = data1.count ;
                                         document.getElementById('permissionbox-close').style.display = 'block';                               
                                        });
                        tableBody.appendChild(row);     
                }
        } )               
}  

function MemberApproval() {
   
    //document.getElementById('pop-up').style.display = 'block'; 
    //alert("Member Approval is not yet implemented. Please check back later.");
    checkmember(event);
    // alert(event);

}
 function checkmember(event) {
    document.getElementById('nav-1').style.display="none"; 
    document.getElementById('pop-up').style.display = 'none'; 
    document.getElementById('Member-Approval').style.display="block"; 
    if (event.key === 'Enter') {
        ViewPermission(PermissionData,event.target.value.toUpperCase());
}}

