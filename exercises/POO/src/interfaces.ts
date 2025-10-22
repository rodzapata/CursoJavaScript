interface IShape {
    area(): number

}

abstract class Shape implements IShape {
    abstract area(): number;
}