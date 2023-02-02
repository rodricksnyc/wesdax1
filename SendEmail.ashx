<%@ WebHandler Language="VB" Class="SendEmail" %>

Imports System
Imports System.Web
Imports System.Net.Mail

Public Class SendEmail : Implements IHttpHandler

    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim bResult As Boolean = False


        Try
            Dim msg As New MailMessage()
            Dim server As SmtpClient = New SmtpClient("relay.westat.com")
            Dim content As String = ""

            Dim sName As String = HttpContext.Current.Request.Form("Name")
            Dim sEmail As String = HttpContext.Current.Request.Form("Email")
            Dim sOrg As String = HttpContext.Current.Request.Form("Organization")
            Dim sContactType As String = HttpContext.Current.Request.Form("ContactType")
            Dim sMessage As String = HttpContext.Current.Request.Form("Message")

            content = String.Format("Name: {0} <br />Email: {1} <br />Organization: {2} <br />Contact Type: {3}<br />Message: {4}", sName, sEmail, sOrg, sContactType, sMessage)
            msg.From = New MailAddress("donotreply@westat.com")
            msg.To.Add(New MailAddress("WesDaXHelp@westat.com"))

            msg.Subject = "WesDaX Contact Us"
            msg.Body = content
            msg.IsBodyHtml = True
            server.Send(msg)
            bResult = True
        Catch ex As Exception
            bResult = False

        End Try

        Try
            Dim msg As New MailMessage()
            Dim server As SmtpClient = New SmtpClient("relay.westat.com")
            Dim content As String = ""

            Dim sName As String = HttpContext.Current.Request.Form("Name")
            Dim sEmail As String = HttpContext.Current.Request.Form("Email")
            Dim sOrg As String = HttpContext.Current.Request.Form("Organization")
            Dim sContactType As String = HttpContext.Current.Request.Form("ContactType")
            Dim sMessage As String = HttpContext.Current.Request.Form("Message")

            ' content = String.Format("Name: {0} <br />Email: {1} <br />Organization: {2} <br />Contact Type: {3}<br />Message: {4}", sName, sEmail, sOrg, sContactType, sMessage)
            msg.From = New MailAddress("donotreply@westat.com")
            msg.To.Add(New MailAddress("WesDaXHelp@westat.com"))
            msg.CC.Add(New MailAddress(sEmail))

            msg.Subject = String.Format("Thank you for your {0} about WesDaX", sContactType.ToLower())
            msg.Body = String.Format("Hi {0},<br><br>We have received your message, a customer representative will respond within 24 hours.<br><br>- The WesDax Team", sName)
            msg.IsBodyHtml = True
            server.Send(msg)
            bResult = True
        Catch ex As Exception
            bResult = False

        End Try

        ' context.Response.ContentType = "text/HTML"
 
        'If bResult Then
            ' context.Response.Write("<html><body>Email Sent.</body></html>")
            'HttpContext.Current.Response.Redirect("/")
        'Else
            'context.Response.Write("<html><body>Email Error</body></html>")
            'HttpContext.Current.Response.Redirect("failed.html")
        'End If


    End Sub

    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class