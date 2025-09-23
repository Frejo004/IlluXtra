<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Code de vérification - IlluXtra</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #333; text-align: center; margin-bottom: 30px;">IlluXtra</h1>
        
        <h2 style="color: #555; text-align: center;">Vérification de votre compte</h2>
        
        <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Bonjour,
        </p>
        
        <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Merci de vous être inscrit sur IlluXtra ! Pour finaliser votre inscription, veuillez utiliser le code de vérification suivant :
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
            <span style="display: inline-block; background-color: #007bff; color: white; font-size: 24px; font-weight: bold; padding: 15px 30px; border-radius: 5px; letter-spacing: 3px;">
                {{ $code }}
            </span>
        </div>
        
        <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Ce code est valide pendant 15 minutes. Si vous n'avez pas demandé cette vérification, vous pouvez ignorer cet email.
        </p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #999; font-size: 14px; text-align: center;">
            Cet email a été envoyé automatiquement, merci de ne pas y répondre.
        </p>
    </div>
</body>
</html>