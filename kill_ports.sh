#!/bin/bash

# Define the ports array
ports=(3000 3001)

# Loop over the ports
for port in "${ports[@]}"
do
  # Fetch the Process ID (PID) using lsof for the given port
  pid=$(lsof -t -i:$port)
  
  # If a process is running on the port, then kill it
  if [ ! -z "$pid" ]; then
    echo "Killing process on port $port with PID: $pid"
    kill -9 $pid
  else
    echo "No process running on port $port"
  fi
done

echo "Script executed successfully!"