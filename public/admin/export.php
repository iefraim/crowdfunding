<div class="col-md-6"><button onclick="exportTable()" class="btn btn-primary ">Export</button></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/TableExport/5.2.0/js/tableexport.min.js"></script>
<script>
    function exportTable(){
        TableExport(document.getElementsByTagName("table"), {
    headers: true,                              // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
    footers: true,                              // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
    formats: ['xls'],            // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
    filename: 'id',                             // (id, String), filename for the downloaded file, (default: 'id')
    bootstrap: false,                           // (Boolean), style buttons using bootstrap, (default: true)
    exportButtons: true,                        // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
    position: 'bottom',                         // (top, bottom), position of the caption element relative to table, (default: 'bottom')
    ignoreRows: null,                           // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
    ignoreCols: null,                           // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
    trimWhitespace: true,                       // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
    RTL: false,                                 // (Boolean), set direction of the worksheet to right-to-left (default: false)
    sheetname: "id"                             // (id, String), sheet name for the exported spreadsheet, (default: 'id')
});
    }
    $('table').on('click','.tableexport-caption',function(){
   
   
    $(this).remove();
});
</script>