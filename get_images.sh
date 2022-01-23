#!/bin/sh
mkdir imgs
cd imgs
cat ../links.txt | while read line 
do
   # do something with $line here
   wget $line
done
