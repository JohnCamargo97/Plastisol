Attribute VB_Name = "Module1"
Sub Entradas_ingreso()

    confirmacion = MsgBox("Esta seguro que desear ingresar los datos", vbYesNo + vbExclamation, "Confirmacion")
        If confirmacion = vbYes Then
        
            Dim hist As ListObject
            Set hist = ThisWorkbook.Sheets("Entradas_hist").ListObjects("entradas_hist")
            
            Dim histRow As Long
            histRow = hist.Range.Rows(hist.Range.Rows.Count).Row
            histRow = histRow + 1
            'MsgBox (histRow)
            
            
            Dim entry As ListObject
            Set entry = ThisWorkbook.Sheets("Entradas_INVENTARIO").ListObjects("entradas_inv")
            
            Dim entryRow As Long
            entryRow = entry.Range.Rows(entry.Range.Rows.Count).Row
            'MsgBox (entryRow)
        
            ThisWorkbook.Sheets("Entradas_INVENTARIO").Range("A2:F" & entryRow).Copy
            ThisWorkbook.Sheets("Entradas_hist").Range("A" & histRow).PasteSpecial Paste:=xlPasteValues, Operation:=xlNone, SkipBlanks _
                :=False, Transpose:=False
                
            borrar = MsgBox("Datos agregados correctamente. desea limpiar la tabla?", vbYesNo + vbExclamation, "Confirmacion")
            If borrar = vbYes Then
                Entradas_limpiar
                MsgBox "Tabla limpiada"
            End If
        End If
    
End Sub


Sub Entradas_limpiar()

    Dim entry As ListObject
    Set entry = ThisWorkbook.Sheets("Entradas_INVENTARIO").ListObjects("entradas_inv")
    
    Dim entryRow As Long
    entryRow = entry.Range.Rows(entry.Range.Rows.Count).Row
    ThisWorkbook.Sheets("Entradas_INVENTARIO").Range("A2:F" & entryRow).Delete
    
End Sub


Sub test()
    a = Range("factura_date").Value
    MsgBox (a)
   
End Sub


Sub guardar_factura()
    
    Dim nombrehoja As String
    Dim hojadestino As Range
    Dim nuevafila As Integer
    Dim filasfactura As Integer
    Dim i As Integer
    Dim j As Integer
    Dim factura_id As Integer
    Dim Ruta As String
    
    nombrehoja = "Salidas_hist"
    filasfactura = Application.WorksheetFunction.CountA(ThisWorkbook.Sheets("FACTURA").ListObjects("factura_tb").ListColumns(1).DataBodyRange)
    factura_id = Range("factura_id").Value
    
    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
    If filasfactura = 0 Or Range("factura_cliente").Value = "" Then
        MsgBox "Factura vacia o sin cliente", vbExclamation, "Alerta": Exit Sub
     End If
    
    'Propiedad FileDialog
    With Application.FileDialog(msoFileDialogFolderPicker)
        .InitialFileName = Application.DefaultFilePath & " \ "
        .Title = "Seleccionar carpeta"
        .Show
        If .SelectedItems.Count = 0 Then
        Else
            Ruta = .SelectedItems(1)
            MsgBox "Guardando en PDF factura '" & factura_id & "'. Presione Aceptar para continuar...", _
            vbInformation, "Plastisol"
            
            ActiveSheet.ExportAsFixedFormat Type:=xlTypePDF, Filename:= _
            Ruta & "\" & "factura-" & factura_id & ".pdf", Quality:=xlQualityStandard, _
            IncludeDocProperties:=True, IgnorePrintAreas:=False, OpenAfterPublish:=False

        End If
    End With
        
    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
    With ThisWorkbook.Sheets(nombrehoja)
    
        For i = 1 To filasfactura
            
            Set hojadestino = ThisWorkbook.Sheets(nombrehoja).Range("A1").CurrentRegion
            nuevafila = hojadestino.Rows.Count + 1
            .Cells(nuevafila, 1).Value = factura_id
            .Cells(nuevafila, 2).Value = Date
            .Cells(nuevafila, 3).Value = Time()
            .Cells(nuevafila, 4).Value = Range("factura_cliente").Value
            
            For j = 1 To 6
                .Cells.Cells(nuevafila, j + 4).Value = ThisWorkbook.Sheets("FACTURA").Cells(14 + i, 1 + j)
            Next j
            .Cells(nuevafila, 11).Value = "venta"
            .Cells(nuevafila, 12).Value = Now
            
        Next i
        
    End With
     
End Sub

Sub Factura_limpiar()
    ThisWorkbook.Sheets("FACTURA").ListObjects("factura_tb").DataBodyRange.Columns(1).ClearContents
    ThisWorkbook.Sheets("FACTURA").ListObjects("factura_tb").DataBodyRange.Columns(3).ClearContents
    ThisWorkbook.Sheets("FACTURA").ListObjects("factura_tb").DataBodyRange.Columns(5).ClearContents
End Sub

Sub Ticket_limpiar()
    
End Sub

Sub SaveSelectedSheets()

Dim Workbook_Source As Workbook, Target_Workbook As Workbook
Dim Sheet_List As String
Dim Sheet_Array As Variant
Dim Array_Index As Long

On Error GoTo errHandle

Sheet_List = "Entradas_hist:Salidas_hist:historico_movimientos:INVENTARIO ACTUAL"
Sheet_Array = Split(Sheet_List, ":")

If UBound(Sheet_Array) = -1 Then Exit Sub

Set Workbook_Source = ThisWorkbook
Set Target_Workbook = Workbooks.Add

Application.DisplayAlerts = False
Application.ScreenUpdating = False

For Array_Index = LBound(Sheet_Array) To UBound(Sheet_Array)
ThisWorkbook.Worksheets(Sheet_Array(Array_Index)).Copy Target_Workbook.Worksheets(Target_Workbook.Worksheets.Count)
Next Array_Index

ChDir "D:\Projects\Plastisol\historico_movimientos"
ActiveWorkbook.SaveAs Filename:="D:\Projects\Plastisol\historico_movimientos\historico.xlsx", CreateBackup:=False
ActiveWorkbook.Close False
Application.DisplayAlerts = True
Application.ScreenUpdating = True
CleanObjects:
Set Target_Workbook = Nothing
Set Workbook_Source = Nothing
Exit Sub
errHandle:
MsgBox "Error: " & Err.Description, vbExclamation
GoTo CleanObjects
End Sub


Sub Ticket()



End Sub
