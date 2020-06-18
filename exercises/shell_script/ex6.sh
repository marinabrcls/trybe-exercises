#!/bin/bash

read -p "Digite um caminho de arquivo ou diretório: " FPATH

if [ -f $FPATH ]
then
    echo "$FPATH é um arquivo comum."
elif [ -d $FPATH ]
then
    echo "$FPATH é um diretório."
else
    echo "$FPATH é um outro tipo de arquivo."
fi

ls -l $FPATH