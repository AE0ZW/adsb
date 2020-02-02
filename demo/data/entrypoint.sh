#!/usr/bin/sh
echo "INFO: Sending raw hex data to dump1090 on port 30001"

while true;
    do while read -r line;
        do echo "$line";
        sleep 0.01;
    done < raw.dat | nc dump1090 30001
done

echo "INFO: Shutting down"

exit 0
