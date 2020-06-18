#!/bin/bash

FPATH="/home/marinabrcls/Trybe/shell_script/ex1.sh"

if [ -e $FPATH ]
then 
    echo "O caminho $FPATH está habilitado!"
fi

if [ -w $FPATH ]
then
    echo "Você tem permissão para editar $FPATH."
else
    echo "Você NÃO foi autorizado a editar $FPATH"
fi
