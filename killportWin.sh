#!/bin/bash

# Get all PIDs on port 3000
for pid in $(netstat -ano | grep "LISTENING" | grep ":3000" | awk '{print $5}')
do
  # Kill the process
  taskkill //PID $pid //F
done

# Get all PIDs on port 3001
for pid in $(netstat -ano | grep "LISTENING" | grep ":3001" | awk '{print $5}')
do
  # Kill the process
  taskkill //PID $pid //F
done

echo "Killed all processes on ports 3000 and 3001."