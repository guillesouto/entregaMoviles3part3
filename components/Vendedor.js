import { useForm,Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { StyleSheet, Text , View , TouchableOpacity, TextInput, Picker, Image } from "react-native-web";

function Vendedor() {
    const {control,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
          idvend:'',
          nombre:'',
          correo:'',
          totalcomision:''
        } 
      })

    const onSubmit = data => console.log(data)
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Controller
            control={control}
            rules={{
            required:true,
            pattern: /^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/ ,
            minLength:4 
            }}
            render={({field: {onChange, onBlur, value}})=>(
            <TextInput
            style={[styles.inputs,{borderColor: errors.idvend?.type == "required" || errors.idvend?.type == "pattern" || errors.idvend?.type == "minLength" ? 'red' : 'green'}]}
            placeholder="ID Vendedor"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            />
            )}
            name='salary'
        />
        {errors.idvend?.type == "required" && <Text style={{color:'red'}}>El ID del Vendedor es obligatorio</Text>}
        {errors.idvend?.type == "minLength" && <Text style={{color:'red'}}>El ID Vendedor no puede ser menor a 4 digitos</Text>}
        {errors.idvend?.type == "pattern" && <Text style={{color:'red'}}>El ID del Vendedor debe ser solo numerico</Text>}


        <Controller
            control={control}
            rules={{
            required:true,
            pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g ,
            maxLength:50,
            minLength:3
            }}
            render={({field:{onChange,onBlur,fullname}})=>(
            <TextInput
                style={[styles.inputs,{borderColor: errors.fullname?.type == "required" || errors.fullname?.type == "pattern" ||
                errors.fullname?.type == "maxLength" || errors.fullname?.type == "minLength" ? 'red' : 'green'}]}
                placeholder="Nombre Completo"
                onChange={onChange}
                onBlur={onBlur}
                value={fullname}
            ></TextInput>
            )}
            name='fullname'
        />
        {errors.fullname?.type == "required" && <Text style={{color:'red'}}>El nombre es obligatorio</Text>}
        {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>El nombre no puede exceder de 50 caracteres</Text>}
        {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>El nombre debe tener minimo 3 caracteres</Text>}
        {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>El nombre solo puede tener letras y/o espacios</Text>}


        <Controller
            control={control}
            rules={{
            required:true,
            pattern:/^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/ ,
            minLength:8 
            }}
            render={({field: {onChange, onBlur, value}})=>(
            <TextInput
            style={[styles.inputs,{borderColor: errors.email?.type == "required" || errors.email?.type == "pattern" ||  errors.email?.type == "minLength" ? 'red' : 'green'}]}
            placeholder="Email"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            />
            )}
            name='email'
        />
        {errors.email?.type == "required" && <Text style={{color:'red'}}>El email es obligatorio</Text>}
        {errors.email?.type == "maxLength" && <Text style={{color:'red'}}>El email no puede superar los 30 caracteres</Text>}
        {errors.email?.type == "minLength" && <Text style={{color:'red'}}>El email no puede ser menor a 8 caracteres</Text>}
        {errors.email?.type == "pattern" && <Text style={{color:'red'}}>El email debe tener una direccion de correo valida</Text>}


        <Controller
            control={control}
            rules={{
            required:true,
            pattern: /^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/ ,
            minLength:2
            }}
            render={({field:{onChange,onBlur,value}})=>(
            <TextInput
                style={[styles.inputs,{borderColor: errors.totalcomision?.type == "required" || errors.totalcomision?.type == "pattern" || errors.totalcomision?.type == "minLength" ? 'red' : 'green'}]}
                placeholder="Total Comision"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            )}
            name='totalcomision'
        />
        {errors.totalcomision?.type == "required" && <Text style={{color:'red'}}>El Valor de la Comision es obligatorio</Text>}
        {errors.totalcomision?.type == "minLength" && <Text style={{color:'red'}}>El valor de la Comision debe tener minimo 2 digitos</Text>}
        {errors.totalcomision?.type == "pattern" && <Text style={{color:'red'}}>El Valor de la Comision debe ser unicamente numerico</Text>}

      <TouchableOpacity 
        style={{backgroundColor:'green', borderRadius:10, padding:5, width:200}}
        onPress={handleSubmit(onSubmit)}>

        <Text style={{color:'white', textAlign:'center'}}>Enviar</Text>
      </TouchableOpacity>
    </View>
    );
}

export default Vendedor;

