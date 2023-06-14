package domain;

public abstract class FiguraGeometrica {
    protected String tipoFigura;
    protected FiguraGeometrica(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }
    //Metodo Abstracto
    public abstract void dibujar();

    //Agregamos set and get
    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    @Override
    public String toString() {
        return "FiguraGeometrica{" + "tipoFigura=" + tipoFigura + "}";
    }
}
