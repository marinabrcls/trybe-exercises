#!/bin/bash

MULTIPLEFILES=$@

for FPATH in $MULTIPLEFILES
    do
        if [ -f $FPATH ]
            then
                echo "$FPATH é um arquivo comum."
        elif [ -d $FPATH ]
            then
                echo "$FPATH é um diretório."
        else
                echo "$FPATH é um outro tipo de arquivo."
        fi
    done

ls -l $FPATH