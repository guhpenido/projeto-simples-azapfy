"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Typography,
    Button,
    InputLabel,
    FormControl,
    Input
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Form() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const formatCurrency = (value) => {
        const formattedValue = value.replace(/\D/g, '').replace(/(\d)(\d{2})$/, '$1,$2');
        const parts = formattedValue.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return parts.join(',');
    };

    const formatNumber = (value) => {
        return value.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    };

    return (
        <Box p={4}>
            <Typography variant='h5' color='textSecondary' mb={3}>
                Mais informações
            </Typography>
            <Box className='flex flex-row flex-wrap'>
                <FormControl className='m-4 w-40'>
                    <InputLabel htmlFor='frete' m={0}>Valor do Frete</InputLabel>
                    <Input
                        id='frete'
                        type='text'
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        {...register('frete')}
                        onChange={(e) => {
                            e.target.value = formatCurrency(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl className='m-4 w-40'>
                    <InputLabel htmlFor='desconto'>Desconto</InputLabel>
                    <Input
                        id='desconto'
                        type='text'
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        {...register('desconto')}
                        onChange={(e) => {
                            e.target.value = formatCurrency(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl className='m-4 w-60'>
                    <InputLabel htmlFor='totalProdutos'>Total dos Produtos/Serviços</InputLabel>
                    <Input
                        id='totalProdutos'
                        type='text'
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        {...register('totalProdutos')}
                        onChange={(e) => {
                            e.target.value = formatCurrency(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl className='m-4 w-40'>
                    <InputLabel htmlFor='totalNota'>Total da Nota</InputLabel>
                    <Input
                        id='totalNota'
                        type='text'
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        {...register('totalNota')}
                        onChange={(e) => {
                            e.target.value = formatCurrency(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl className='m-4 w-40'>
                    <InputLabel htmlFor='pesoTotal'>Peso Total</InputLabel>
                    <Input
                        id='pesoTotal'
                        type='text'
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        {...register('pesoTotal')}
                        onChange={(e) => {
                            e.target.value = formatCurrency(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl className='m-4 w-40'>
                    <InputLabel htmlFor='volumeTotal'>Volume Total</InputLabel>
                    <Input
                        id='volumeTotal'
                        type='text'
                        endAdornment={<InputAdornment position="end">uni</InputAdornment>}
                        {...register('volumeTotal')}
                        onChange={(e) => {
                            e.target.value = formatNumber(e.target.value);
                        }}
                    />
                </FormControl>
            </Box>

            <Box className='flex flex-row flex-wrap'>
                <FormControl className='m-4 w-80'>
                    <InputLabel htmlFor='pontoReferencia'>Ponto de referência</InputLabel>
                    <Input
                        id='pontoReferencia'
                        type='text'
                        {...register('pontoReferencia')}
                    />
                </FormControl>
                <FormControl className='m-4 w-96'>
                    <InputLabel htmlFor='obs'>Obs.</InputLabel>
                    <Input
                        id='obs'
                        type='text'
                        {...register('obs')}
                    />
                </FormControl>
            </Box>
            <Typography variant='h6' color='textSecondary' mt={3}>
                Descrição do Produto/Serviço
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className='flex flex-row flex-wrap'>

                    <FormControl className='m-4 w-40'>
                        <InputLabel htmlFor='quantidade'>Quantidade</InputLabel>
                        <Input
                            id='quantidade'
                            type='text'
                            endAdornment={<InputAdornment position="end">uni</InputAdornment>}
                            {...register('quantidade')}
                            onChange={(e) => {
                                e.target.value = formatNumber(e.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl className='m-4 w-40'>
                        <InputLabel htmlFor='valorUnitario'>Valor unitário</InputLabel>
                        <Input
                            id='valorUnitario'
                            type='text'
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            {...register('valorUnitario')}
                            onChange={(e) => {
                                e.target.value = formatCurrency(e.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl className='m-4 w-40'>
                        <InputLabel htmlFor='peso'>Peso</InputLabel>
                        <Input
                            id='peso'
                            type='text'
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            {...register('peso')}
                            onChange={(e) => {
                                e.target.value = formatCurrency(e.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl className='m-4 w-40'>
                        <InputLabel htmlFor='volume'>Volume</InputLabel>
                        <Input
                            id='volume'
                            type='text'
                            endAdornment={<InputAdornment position="end">uni</InputAdornment>}
                            {...register('volume')}
                            onChange={(e) => {
                                e.target.value = formatNumber(e.target.value);
                            }}
                        />
                    </FormControl>
                    <FormControl className='m-4 w-40'>
                        <InputLabel htmlFor='valor'>Valor</InputLabel>
                        <Input
                            id='valor'
                            type='text'
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            {...register('valor')}
                            onChange={(e) => {
                                e.target.value = formatCurrency(e.target.value);
                            }}
                        />
                    </FormControl>
                </Box>
                <Box className='flex flex-row flex-wrap'>
                    <FormControl className='m-4 w-60'>
                        <InputLabel htmlFor='descricao'>Descrição</InputLabel>
                        <Input
                            id='descricao'
                            type='text'
                            {...register('descricao')}
                        />
                    </FormControl>
                    <FormControl className='m-4 w-60'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Prazo Minimo" />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl className='m-4 w-60'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Prazo Máximo" />
                        </LocalizationProvider>
                    </FormControl>
                    <Button type='submit' variant='contained' color='primary' className='mt-5'>
                        +
                    </Button>
                </Box>
            </form>
        </Box >
    );
}

export default Form;