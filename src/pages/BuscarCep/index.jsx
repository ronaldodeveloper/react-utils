import React, {useState} from 'react';
import styles from './buscarcep.module.scss';
import axios from 'axios';
import {FiSearch} from 'react-icons/fi'


function BuscarCep() {

   const [cep, setCep]= useState('');
   const [data, setData]= useState('');

    const buscarCep= async(e)=>{
       e.preventDefault();
       try {
           const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`) 
            setData(response.data)
         //   console.log(response.data.erro)
         
       } catch (error) {
           console.log('Erro na chamada da API')
       }
       setCep('')
   }

  return (
<div className={`container ${styles.buscarCep}`}>
     <h1 className="fw-bold">BUSCAR CEP</h1>
     <form className="form mt-4" onSubmit={buscarCep}>
         <fieldset className="form-group row m-0">
            <div className={`d-flex ${styles.inputBox}`}>
               <input 
                    type="text" 
                    placeholder="Digite seu CEP" 
                    className={`form-control ${styles.inputCep}`} 
                    value={cep} 
                    onChange={(e)=>{setCep(e.target.value)}}
                    required
                    pattern="\d*" 
                    maxLength="8" 
               />
               <button className={styles.icone}><FiSearch/></button>
            </div>
         </fieldset>
     </form>
     <div className="result mt-5">
         {data &&
            (
              <ul className="list-group">
             <li className="list-group-item"><strong>Cidade: </strong>{data.localidade} - {data.uf}</li>
             <li className="list-group-item"><strong>Bairro: </strong>{data.bairro}</li>
             <li className="list-group-item"><strong>Rua: </strong>{data.logradouro}</li>
             <li className="list-group-item"><strong>Cep: </strong>{data.cep}</li>
           </ul>
            )
         }
     </div>
    </div>
  )
}

export default BuscarCep
