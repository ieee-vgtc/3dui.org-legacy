#!/bin/bash

for f in `find . | grep '\.js?m'`; do
    echo Processing $f.
    mv $f `echo $f | sed 's/\.js?m.*/.js/g'`
done

for f in `find . | grep '\.css?m'`; do
    echo Processing $f.
    mv $f `echo $f | sed 's/\.css?m.*/.css/g'`
done

echo OK, done.
