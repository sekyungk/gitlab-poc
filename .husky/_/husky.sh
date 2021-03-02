COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
issue_number=`echo ${branch_name} | cut -d '-' -f1 -f2`
upper_issue_number=`echo ${issue_number} | tr [:lower:] [:upper:]`
first_line=`head -n1 ${COMMIT_MSG_FILE}`

if [[ ! "$first_line" =~ "$upper_issue_number" ]];then
  sed -i ".bak" "1s/^/$upper_issue_number /" ${COMMIT_MSG_FILE}
fi