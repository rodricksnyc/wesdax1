
Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        lblSiteName.Text = Request.ServerVariables("SERVER_NAME")

        Label1.BackColor = Drawing.Color.Blue
        Label1.ForeColor = Drawing.Color.Yellow
        Label1.Font.Bold = True
        Label1.Text = DateTime.Now.ToString.PadLeft(3, " ")

        Dim NVCSrvElements As NameValueCollection = Request.ServerVariables

        If Not IsPostBack Then
            Names.DataSource = NVCSrvElements
            Names.DataBind()
        Else
            ValuesHead.Text = "Values: "
            If NVCSrvElements.Get(Names.SelectedItem.Text).ToString() = Nothing Then
                Values.Text = "null"
            Else
                Values.Text = NVCSrvElements.Get(Names.SelectedItem.Text).ToString()
            End If
        End If

    End Sub

    
End Class
