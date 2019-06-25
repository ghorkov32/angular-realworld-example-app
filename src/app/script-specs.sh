for i in `find . -name "*.ts" -type f`; do
		echo "$i"
        ng g ngx-spec:spec "$i"
done