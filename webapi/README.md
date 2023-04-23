## COMMANDS

#### DB Connect
```
Scaffold-DBContext "Server=DESKTOP-I7420DA\SQLEXPRESS; Database=DrakoDB; User Id=sa; Password=pass123456789; Trusted_Connection=True; Encrypt=False;TrustServerCertificate=False;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Context DatabaseContext -f
```

#### Migrations
```
Add-Migration Initial
```

#### Run Migration
```
update-database
```