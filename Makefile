export K6_BROWSER_HEADLESS := true
REPORT_DIR := src/Reports/report-prioritize01
# REPORT_DIR := src/Reports/report-prioritize02
# REPORT_DIR := src/Reports/report-prioritize03
# REPORT_DIR := src/Reports/report-prioritize04
# REPORT_DIR := src/Reports/report-prioritize05
# REPORT_DIR := src/Reports/report-prioritize06
# REPORT_DIR := src/Reports/report-prioritize07
# REPORT_DIR := src/Reports/report-prioritize08
# REPORT_DIR := src/Reports/report-prioritize09

CSV_FILES := $(REPORT_DIR)/report-1sku.csv \
             $(REPORT_DIR)/report-5sku.csv \
             $(REPORT_DIR)/report-10sku.csv \
             $(REPORT_DIR)/report-15sku.csv \
             $(REPORT_DIR)/report-20sku.csv \
             $(REPORT_DIR)/report-25sku.csv \
             $(REPORT_DIR)/report-30sku.csv \
             $(REPORT_DIR)/report-35sku.csv \
             $(REPORT_DIR)/report-40sku.csv \
             $(REPORT_DIR)/report-45sku.csv \
             $(REPORT_DIR)/report-50sku.csv

MERGED_REPORT := $(REPORT_DIR)/merged-report.csv

run-test-prioritize-01: 
	k6 run --out csv=$(REPORT_DIR)/report-1sku.csv src/script/prioritize-01/prioritize-1sku.js
	k6 run --out csv=$(REPORT_DIR)/report-5sku.csv src/script/prioritize-01/prioritize-5sku.js 
	# k6 run --out csv=$(REPORT_DIR)/report-10sku.csv src/script/prioritize-01/prioritize-10sku.js
	# k6 run --out csv=$(REPORT_DIR)/report-15sku.csv src/script/prioritize-01/prioritize-15sku.js 
	# k6 run --out csv=$(REPORT_DIR)/report-20sku.csv src/script/prioritize-01/prioritize-20sku.js
	# k6 run --out csv=$(REPORT_DIR)/report-25sku.csv src/script/prioritize-01/prioritize-25sku.js
	# k6 run --out csv=$(REPORT_DIR)/report-30sku.csv src/script/prioritize-01/prioritize-30sku.js
	# k6 run --out csv=$(REPORT_DIR)/report-35sku.csv src/script/prioritize-01/prioritize-35sku.js 
	# k6 run --out csv=$(REPORT_DIR)/report-40sku.csv src/script/prioritize-01/prioritize-40sku.js 
	# k6 run --out csv=$(REPORT_DIR)/report-45sku.csv src/script/prioritize-01/prioritize-45sku.js
	# k6 run --out csv=$(REPORT_DIR)/report-50sku.csv src/script/prioritize-01/prioritize-50sku.js
# Combine all CSVs into one file
	@echo "Merging CSV reports into one file..."
	@{ head -n 1 $(REPORT_DIR)/report-1sku.csv; \
	   tail -n +2 -q $(CSV_FILES); } > $(MERGED_REPORT)
	@echo "Merged report generated: $(MERGED_REPORT)"


run-test-prioritize-02: 
	k6 run --out csv=$(REPORT_DIR)/report-1sku.csv src/script/prioritize-02/prioritize-1sku.js
	k6 run --out csv=$(REPORT_DIR)/report-5sku.csv src/script/prioritize-02/prioritize-5sku.js 
	k6 run --out csv=$(REPORT_DIR)/report-10sku.csv src/script/prioritize-02/prioritize-10sku.js
	k6 run --out csv=$(REPORT_DIR)/report-15sku.csv src/script/prioritize-02/prioritize-15sku.js 
	k6 run --out csv=$(REPORT_DIR)/report-20sku.csv src/script/prioritize-02/prioritize-20sku.js
	k6 run --out csv=$(REPORT_DIR)/report-25sku.csv src/script/prioritize-02/prioritize-25sku.js
	k6 run --out csv=$(REPORT_DIR)/report-30sku.csv src/script/prioritize-02/prioritize-30sku.js
	k6 run --out csv=$(REPORT_DIR)/report-35sku.csv src/script/prioritize-02/prioritize-35sku.js 
	k6 run --out csv=$(REPORT_DIR)/report-40sku.csv src/script/prioritize-02/prioritize-40sku.js 
	k6 run --out csv=$(REPORT_DIR)/report-45sku.csv src/script/prioritize-02/prioritize-45sku.js
	k6 run --out csv=$(REPORT_DIR)/report-50sku.csv src/script/prioritize-02/prioritize-50sku.js


run-test-prioritize-03: 
	k6 run --out csv=src/Reports/report-prioritize03/report-1sku.csv src/script/prioritize-03/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize03/report-5sku.csv src/script/prioritize-03/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize03/report-10sku.csv src/script/prioritize-03/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize03/report-15sku.csv src/script/prioritize-03/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize03/report-20sku.csv src/script/prioritize-03/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize03/report-25sku.csv src/script/prioritize-03/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize03/report-30sku.csv src/script/prioritize-03/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize03/report-35sku.csv src/script/prioritize-03/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize03/report-40sku.csv src/script/prioritize-03/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize03/report-45sku.csv src/script/prioritize-03/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize03/report-50sku.csv src/script/prioritize-03/prioritize-50sku.js

run-test-prioritize-04: 
	k6 run --out csv=src/Reports/report-prioritize04/report-1sku.csv src/script/prioritize-04/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize04/report-5sku.csv src/script/prioritize-04/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize04/report-10sku.csv src/script/prioritize-04/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize04/report-15sku.csv src/script/prioritize-04/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize04/report-20sku.csv src/script/prioritize-04/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize04/report-25sku.csv src/script/prioritize-04/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize04/report-30sku.csv src/script/prioritize-04/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize04/report-35sku.csv src/script/prioritize-04/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize04/report-40sku.csv src/script/prioritize-04/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize04/report-45sku.csv src/script/prioritize-04/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize04/report-50sku.csv src/script/prioritize-04/prioritize-50sku.js

run-test-prioritize-05: 
	k6 run --out csv=src/Reports/report-prioritize05/report-1sku.csv src/script/prioritize-05/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize05/report-5sku.csv src/script/prioritize-05/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize05/report-10sku.csv src/script/prioritize-05/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize05/report-15sku.csv src/script/prioritize-05/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize05/report-20sku.csv src/script/prioritize-05/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize05/report-25sku.csv src/script/prioritize-05/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize05/report-30sku.csv src/script/prioritize-05/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize05/report-35sku.csv src/script/prioritize-05/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize05/report-40sku.csv src/script/prioritize-05/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize05/report-45sku.csv src/script/prioritize-05/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize05/report-50sku.csv src/script/prioritize-05/prioritize-50sku.js

run-test-prioritize-06: 
	k6 run --out csv=src/Reports/report-prioritize06/report-1sku.csv src/script/prioritize-06/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize06/report-5sku.csv src/script/prioritize-06/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize06/report-10sku.csv src/script/prioritize-06/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize06/report-15sku.csv src/script/prioritize-06/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize06/report-20sku.csv src/script/prioritize-06/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize06/report-25sku.csv src/script/prioritize-06/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize06/report-30sku.csv src/script/prioritize-06/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize06/report-35sku.csv src/script/prioritize-06/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize06/report-40sku.csv src/script/prioritize-06/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize06/report-45sku.csv src/script/prioritize-06/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize06/report-50sku.csv src/script/prioritize-06/prioritize-50sku.js

run-test-prioritize-07: 
	k6 run --out csv=src/Reports/report-prioritize07/report-1sku.csv src/script/prioritize-07/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize07/report-5sku.csv src/script/prioritize-07/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize07/report-10sku.csv src/script/prioritize-07/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize07/report-15sku.csv src/script/prioritize-07/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize07/report-20sku.csv src/script/prioritize-07/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize07/report-25sku.csv src/script/prioritize-07/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize07/report-30sku.csv src/script/prioritize-07/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize07/report-35sku.csv src/script/prioritize-07/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize07/report-40sku.csv src/script/prioritize-07/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize07/report-45sku.csv src/script/prioritize-07/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize07/report-50sku.csv src/script/prioritize-07/prioritize-50sku.js

run-test-prioritize-08: 
	k6 run --out csv=src/Reports/report-prioritize08/report-1sku.csv src/script/prioritize-08/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize08/report-5sku.csv src/script/prioritize-08/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize08/report-10sku.csv src/script/prioritize-08/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize08/report-15sku.csv src/script/prioritize-08/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize08/report-20sku.csv src/script/prioritize-08/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize08/report-25sku.csv src/script/prioritize-08/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize08/report-30sku.csv src/script/prioritize-08/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize08/report-35sku.csv src/script/prioritize-08/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize08/report-40sku.csv src/script/prioritize-08/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize08/report-45sku.csv src/script/prioritize-08/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize08/report-50sku.csv src/script/prioritize-08/prioritize-50sku.js

run-test-prioritize-09: 
	k6 run --out csv=src/Reports/report-prioritize09/report-1sku.csv src/script/prioritize-09/prioritize-1sku.js
	k6 run --out csv=src/Reports/report-prioritize09/report-5sku.csv src/script/prioritize-09/prioritize-5sku.js 
	k6 run --out csv=src/Reports/report-prioritize09/report-10sku.csv src/script/prioritize-09/prioritize-10sku.js
	k6 run --out csv=src/Reports/report-prioritize09/report-15sku.csv src/script/prioritize-09/prioritize-15sku.js 
	k6 run --out csv=src/Reports/report-prioritize09/report-20sku.csv src/script/prioritize-09/prioritize-20sku.js
	k6 run --out csv=src/Reports/report-prioritize09/report-25sku.csv src/script/prioritize-09/prioritize-25sku.js
	k6 run --out csv=src/Reports/report-prioritize09/report-30sku.csv src/script/prioritize-09/prioritize-30sku.js
	k6 run --out csv=src/Reports/report-prioritize09/report-35sku.csv src/script/prioritize-09/prioritize-35sku.js 
	k6 run --out csv=src/Reports/report-prioritize09/report-40sku.csv src/script/prioritize-09/prioritize-40sku.js 
	k6 run --out csv=src/Reports/report-prioritize09/report-45sku.csv src/script/prioritize-09/prioritize-45sku.js
	k6 run --out csv=src/Reports/report-prioritize09/report-50sku.csv src/script/prioritize-09/prioritize-50sku.js

run-all-tests: run-test-prioritize-01 run-test-prioritize-02 run-test-prioritize-03 run-test-prioritize-04 run-test-prioritize-05 run-test-prioritize-06 run-test-prioritize-07 run-test-prioritize-08 run-test-prioritize-09
	@echo "All tests executed"