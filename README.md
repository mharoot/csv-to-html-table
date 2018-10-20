# csv-to-html-table
csv to html table generator.  Exploring all possible solutions including my own custom solutions and open source solutions.

# Weird Issues I encountered
- The `FL_insurance_sample.csv` for some reason disturbs the generation of the file.  The character encoding on that may be incorrect.
- The fix was copy and paste the contents of the original csv which I have done in `36635-entries.csv` took apprx 25 seconds to display
- seems like outputting as a html string is much more efficient 