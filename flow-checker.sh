#!/bin/bash

# Simple script to check the flow status and use terminal notifier to show an error message or show a
# success message when you transition from an error state to a clean state.
# Invoke with fswatch which will trigger it on file change -
# fswatch -o src test interfaces .flowconfig | xargs -n1 -I{} ./flow-checker.sh
#
# Script depends on terminal-notifier and fswatch
# brew install terminal-notifier
# brew install fswatch

flow status
flow_status=$(flow status)
if [[ ! $flow_status =~ "No error" ]]; then
  echo  $flow_status | terminal-notifier -title FlowChecker -appIcon ./flow/error.png -sound Funk
fi

previous_flow_status=$(cat /tmp/previous_flow_status.txt)

if [[ $flow_status =~ "No error" ]] && [[ ! $previous_flow_status =~ "No error" ]]; then
    echo "Flow checks passed" | terminal-notifier -title FlowChecker -appIcon ./flow/check.png -sound Hero
fi

echo $flow_status > /tmp/previous_flow_status.txt