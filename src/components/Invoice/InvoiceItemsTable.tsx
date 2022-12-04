import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlank from './InvoiceTableBlank'
import InvoiceTableFooter from './InvoiceTableFooter';

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

  const InvoiceItemsTable = ({invoice}:{invoice:any}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.items} />
        <InvoiceTableBlank rowsCount={ tableRowsCount - invoice.items.length} />
        <InvoiceTableFooter items={invoice.items} />
    </View>
  );
  
  export default InvoiceItemsTable