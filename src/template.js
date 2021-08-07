function template(type, value, length = null){
  if (length === null) {
   return "<div style='font-family:monospace, generic-family; border:1px solid rgba(0,0,0,0.1); background:#0000000e; border-radius:3px;'>"+
                    "<span style='color:#00ff0f'>Type</span>"+
                    " <span style='color:#1e00ff'>=></span>"+
                    " <span style='color:#df02e4'>"+ type +"</span>"+
                    " <br />"+
                    "<span style='color:#00ff0f'>Value</span>"+
                    " <span style='color:#1e00ff'>=></span>"+
                    " <span style='color:#df02e4'>"+ value +"</span>"+
                    " <br />"+
                  "</div>";
  }
   return "<div style='font-family:monospace, generic-family; border:1px solid rgba(0,0,0,0.1); background:#0000000e; border-radius:3px;'>"+
                    "<span style='color:#00ff0f'>Type</span>"+
                    " <span style='color:#1e00ff'>=></span>"+
                    " <span style='color:#df02e4'>"+ type +"</span>"+
                    " <br />"+
                    "<span style='color:#00ff0f'>Length</span>"+
                    " <span style='color:#1e00ff'>=></span>"+
                    " <span style='color:#df02e4'>"+ length +"</span>"+
                    " <br />"+
                    "<span style='color:#00ff0f'>Value</span>"+
                    " <span style='color:#1e00ff'>=></span>"+
                    " <span style='color:#df02e4'>"+ value +"</span>"+
                    " <br />"+
                  "</div>";
}

export default template;