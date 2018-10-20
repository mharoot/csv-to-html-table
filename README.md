# csv-to-html-table
csv to html table generator.  Exploring all possible solutions including my own custom solutions and open source solutions.

# Weird Issues I encountered
- The `FL_insurance_sample.csv` for some reason disturbs the generation of the file.  The character encoding on that may be incorrect.
- The fix was copy and paste the contents of the original csv which I have done in `36635-entries.csv` took apprx 25 seconds to display
- seems like outputting as a html string is much more efficient 

# Main Chunking Method
- Very intreseting method allows dynamically gradually appending of the rows of a csv file.
- main-chunking-method.js
- Overall time to load all objects is slower then main but more tolerable to look at and wait around to load.
- chunking over a 100 doesn't look smooth it looks very unresponsive at 1000 items.
- most optimal chunking amount is 20, smooth user can move on the table as the page finishes loading

# Main
- This one loads faster than the main chunking method but you have to wait 25 seconds to see anything occur on the screen.