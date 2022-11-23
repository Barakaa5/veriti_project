# That code gets the App Context Token and save it to a file named "Latest-token.txt" under the current directory
# Paste below your Tenant ID, App ID and App Secret (App key).
$tenantId = 'c3ee70a6-1c4f-44ea-a8a6-79f0104ffd67' ### Paste your tenant ID here
$appId = '59d3b8c3-208f-4550-85d6-3a3c7966ee66' ### Paste your Application ID here
$appSecret = 'dnV8Q~L3vltj-elGRTslLkUYR~nnwKBfyC6EwcWI' ### Paste your Application secret here

$resourceAppIdUri = 'https://api.securitycenter.microsoft.com'
$oAuthUri = "https://login.microsoftonline.com/$TenantId/oauth2/token"
$authBody = [Ordered] @{
     resource = "$resourceAppIdUri"
     client_id = "$appId"
     client_secret = "$appSecret"
     grant_type = 'client_credentials'
}
$authResponse = Invoke-RestMethod -Method Post -Uri $oAuthUri -Body $authBody -ErrorAction Stop
$token = $authResponse.access_token
Out-File -FilePath "./Latest-token.txt" -InputObject $token
return $token