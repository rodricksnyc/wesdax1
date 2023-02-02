<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <strong><span style="font-size: 14pt; color: #3333ff">Welcome to&nbsp;
            <asp:Label ID="lblSiteName" runat="server" Text="Label"></asp:Label>&nbsp; Web Site</span></strong><br />
        <br />
        <br />
        Time:
        <asp:Label ID="Label1" runat="server" Font-Italic="False" Width="202px" Font-Bold="True"></asp:Label>
        <br />
        <br />
        <hr />
        <strong>Get Server Variables</strong><br />
        <br />
        <asp:DropDownList ID="Names" runat="server" AutoPostBack="True">
        </asp:DropDownList><br />
        <br />
        <asp:Label ID="ValuesHead" runat="server"></asp:Label><br />
        <br />
        <asp:Label ID="Values" runat="server" BackColor="Gold" Font-Bold="True"></asp:Label></div>
    </form>
</body>
</html>
