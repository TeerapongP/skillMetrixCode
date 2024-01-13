public class stringBuffer {
    public static void main(String[] args) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("My name is");
        stringBuilder.append(" ");
        stringBuilder.append("Teerapong");
        String resultStringBuilder = stringBuilder.toString(); // Convert StringBuilder to String

        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("My name is");
        stringBuffer.append(" ");
        stringBuffer.append("Teerapong");
        String resultStringBuffer = stringBuffer.toString(); // Convert StringBuffer to String

        System.out.println("stringBuilder : " + resultStringBuilder);
        System.out.println("stringBuffer : " + resultStringBuffer);

    }
}
