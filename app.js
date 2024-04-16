const modulodhBici = require ("./datosBici");
const fs = require("fs");


const dhBici = {
    bicicletas : modulodhBici,

    buscarBici : function(id) {
        const encontrada = this.bicicletas.find((bicicleta) => {
            if (bicicleta.id === id) {
                return bicicleta
            } else {
                return null
            }
        })
        return encontrada;
    },

    venderBici : function (id) {
        let mensaje = `“Bicicleta no encontrada”. Puedes aprovechar la función (buscarBici).`;

        const vender = this.bicicletas.map((bicicleta) => {
            if (bicicleta.id === id) {
                bicicleta.vendida = true; 
                mensaje = bicicleta                        
            }
            return bicicleta
        })               
        fs.writeFileSync("./bicicletas.json", JSON.stringify(vender), "utf-8");
        
        return mensaje;
    },

    biciParaLaVenta : function () {
        const noVendidas = this.bicicletas.filter((bicicleta) => {
            return !bicicleta.vendida
        })    
        return noVendidas    
    },

    totalDeVentas : function () {
        const vendidas =  this.bicicletas.map((bicicleta) => {
            if (bicicleta.vendida) {
                return bicicleta.precio
            }
            return 0;
        })           
        const total = vendidas.reduce((anterior, siguiente) => anterior + siguiente)
        return total    
    },

    aumentoBici : function (aumento) {
        const conAumento = this.bicicletas.map((bicicleta) => { bicicleta.precio += bicicleta.precio * aumento / 100;
        return bicicleta

        })     
        fs.writeFileSync("./bicicletas.json", JSON.stringify(conAumento), "utf-8")  
        return this.bicicletas                
    },
    
    biciPorRodado : function (rodado) {
        const porRodado = this.bicicletas.filter((bicicleta) => {
            return bicicleta.rodado === rodado;
        })
        return porRodado
    }
}

// console.log(dhBici.buscarBici(1000));
// console.log(dhBici.venderBici(105));
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());
// console.log(dhBici.aumentoBici(10));
// console.log(dhBici.biciPorRodado(26));


module.exports = dhBici